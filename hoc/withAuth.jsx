const withAuth = (WrappedComponent) => {
  return (props) => {
    // services
    // const { isLoading, isSuccess } = useGetUserInfoFromBffQuery();

    // if (!isSuccess || isLoading) {
    //   return <LoginLoader />;
    // }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
