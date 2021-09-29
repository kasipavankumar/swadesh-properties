import useSwr from "swr";

export default function useActiveProperty() {
  const { data, error } = useSwr("activeProperty", async function () {
    const res = await fetch("/api/active-property", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await res.json();
  });

  return {
    property: data?.property,
    isLoading: !data && !error,
    hasErrors: !!error,
  };
}
