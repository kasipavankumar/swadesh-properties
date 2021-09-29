export default function RootLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col" data-cy="layout">
      {children}
    </div>
  );
}
