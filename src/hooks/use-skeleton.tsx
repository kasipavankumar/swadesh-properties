import React from "react";
import Skeleton, { SkeletonProps } from "react-loading-skeleton";

type UseSkeletonProps = {
  children: JSX.Element;
  skeletonProps?: SkeletonProps;
};

export default function useSkeleton(loading: boolean) {
  return function ({ children, skeletonProps }: UseSkeletonProps): JSX.Element {
    return loading ? <Skeleton {...skeletonProps} /> : children;
  };
}
