import Skeleton, { SkeletonProps } from "react-loading-skeleton";

type LoadingAwareSkeletonProps = {
  loading: boolean;
  children: any;
  skeletonProps?: SkeletonProps;
};

export default function LoadingAwareSkeleton({
  loading,
  children,
  skeletonProps,
}: LoadingAwareSkeletonProps) {
  return loading ? <Skeleton {...skeletonProps} /> : children;
}
