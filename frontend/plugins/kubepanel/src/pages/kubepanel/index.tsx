import AppLayout from './components/layout';
import OverviewPage from './components/kube-object/workload/overview/overview';
import { useState } from 'react';
import { SideNavItemKey } from './components/sidebar/sidebar';
import PodOverviewPage from './components/kube-object/workload/pod/pod';
import DeploymentOverviewPage from './components/kube-object/workload/deployment/deployment';
import StatefulSetOverviewPage from './components/kube-object/workload/statefulset/statefulset';
import ConfigMapOverviewPage from './components/kube-object/config/config-map/config-map';
import PersistentVolumeClaimOverviewPage from './components/kube-object/storage/volume-claim/volume-claim';
import { FloatButton } from 'antd';
import CreateResourceModal from './components/modal/create-resource-modal';
import { PlusOutlined } from '@ant-design/icons';
import SecretOverviewPage from './components/kube-object/config/secret/secret';
import IngressOverviewPage from './components/kube-object/network/ingress/ingress';

const switchPage = (key: SideNavItemKey): React.ReactNode => {
  switch (key) {
    case SideNavItemKey.Overview:
      return <OverviewPage />;
    case SideNavItemKey.Pod:
      return <PodOverviewPage />;
    case SideNavItemKey.Deployment:
      return <DeploymentOverviewPage />;
    case SideNavItemKey.StatefulSet:
      return <StatefulSetOverviewPage />;
    case SideNavItemKey.ConfigMap:
      return <ConfigMapOverviewPage />;
    case SideNavItemKey.PersistentVolumeClaim:
      return <PersistentVolumeClaimOverviewPage />;
    case SideNavItemKey.Secret:
      return <SecretOverviewPage />;
    case SideNavItemKey.Ingress:
      return <IngressOverviewPage />;
    default:
      return <OverviewPage />;
  }
};

const Home = () => {
  const [sideNavItemKey, setSideNavItemKey] = useState(SideNavItemKey.Overview);
  const [openCreateResourceModal, setOpenCreateResourceModal] = useState(false);

  return (
    <AppLayout onClickSideNavItem={(key: SideNavItemKey) => setSideNavItemKey(key)}>
      {switchPage(sideNavItemKey)}
      <FloatButton
        icon={<PlusOutlined />}
        tooltip="Create a resource."
        style={{ left: 24, bottom: 30, width: 48, height: 48 }}
        type="primary"
        onClick={() => setOpenCreateResourceModal(true)}
      />
      <CreateResourceModal
        open={openCreateResourceModal}
        setClose={() => setOpenCreateResourceModal(false)}
      />
    </AppLayout>
  );
};

export default Home;
