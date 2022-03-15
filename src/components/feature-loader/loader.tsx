import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useIsLoading } from "../feature-person-list/utils/use-persons-ctx";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export const Loader: React.FC = ({ children }) => {
  const isLoading = useIsLoading();
  if (isLoading) {
    return (
      <Spin tip="...Loading" spinning={true} indicator={antIcon}>
        {children}
      </Spin>
    );
  }
  return <>{children}</>;
};
