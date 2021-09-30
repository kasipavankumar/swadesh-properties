import useSwr from "swr";

type StatusLike = "active" | "funded";

enum StatusEndpoints {
  active = "active-property",
  funded = "funded-properties",
}

export default function useProperties(status: StatusLike) {
  const { data: res, error } = useSwr(
    StatusEndpoints[status],
    async function () {
      const res = await fetch(`/api/${StatusEndpoints[status]}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return await res.json();
    }
  );

  return {
    data: res?.data,
    isLoading: !res && !error,
    hasErrors: !!error,
  };
}
