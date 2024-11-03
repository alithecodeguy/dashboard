// libraries
import { HTMLAttributes, createContext, useMemo, useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Table } from 'antd';

// types
import type { CSSProperties, FC } from 'react';
import type { SyntheticListenerMap } from '@dnd-kit/core/dist/hooks/utilities';
import type { DragEndEvent } from '@dnd-kit/core';
import type { DataType } from './categoriesTableType';

// table configs
import { categoriesTableMockData } from './categoriesTableMockData';
import { categoriesTableColumns } from './categoriesTableDef';
import { CategoriesFilterEnum, CategoryStatusEnum } from './categoriesTableEnum';

interface RowContextProps {
  setActivatorNodeRef?: (element: HTMLElement | null) => void;
  listeners?: SyntheticListenerMap;
}

export const RowContext = createContext<RowContextProps>({});

interface RowProps extends HTMLAttributes<HTMLTableRowElement> {
  'data-row-key': string;
}

const Row: FC<RowProps> = (props) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id: props['data-row-key'] });

  const style: CSSProperties = {
    ...props.style,
    transform: CSS.Translate.toString(transform),
    transition,
    ...(isDragging ? { position: 'relative', zIndex: 9999 } : {})
  };

  const contextValue = useMemo<RowContextProps>(
    () => ({ setActivatorNodeRef, listeners }),
    [setActivatorNodeRef, listeners]
  );

  return (
    <RowContext.Provider value={contextValue}>
      <tr {...props} ref={setNodeRef} style={style} {...attributes} />
    </RowContext.Provider>
  );
};

const CategoriesTable: FC<{ categoriesFilter: CategoriesFilterEnum }> = ({ categoriesFilter }) => {
  const [dataSource, setDataSource] = useState<DataType[]>(categoriesTableMockData);

  const onDragEnd = ({ active, over }: DragEndEvent) => {
    if (active.id !== over?.id) {
      setDataSource((prevState) => {
        const activeIndex = prevState.findIndex((record) => record.key === active?.id);
        const overIndex = prevState.findIndex((record) => record.key === over?.id);
        return arrayMove(prevState, activeIndex, overIndex);
      });
    }
  };

  let filteredData = dataSource;

  if (categoriesFilter === CategoriesFilterEnum.ALL) {
    filteredData = dataSource;
  }

  if (categoriesFilter === CategoriesFilterEnum.ACTIVE) {
    filteredData = dataSource.filter((order) => order.categoryStatus === CategoryStatusEnum.ACTIVE);
  }

  if (categoriesFilter === CategoriesFilterEnum.DEACTIVE) {
    filteredData = dataSource.filter(
      (order) => order.categoryStatus === CategoryStatusEnum.DEACTIVE
    );
  }

  return (
    <DndContext modifiers={[restrictToVerticalAxis]} onDragEnd={onDragEnd}>
      <SortableContext
        items={filteredData.map((i) => i.key)}
        strategy={verticalListSortingStrategy}
      >
        <Table<DataType>
          // rowKey="key"
          pagination={{ position: ['none', 'bottomCenter'] }}
          components={{ body: { row: Row } }}
          columns={categoriesTableColumns()}
          dataSource={filteredData}
        />
      </SortableContext>
    </DndContext>
  );
};

export default CategoriesTable;
