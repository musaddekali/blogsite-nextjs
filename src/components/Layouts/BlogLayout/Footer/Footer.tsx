export default function Footer() {
  const date = new Date();
  return (
    <footer className="bg-slate-200 dark:bg-bg border-t">
      <div className="container">
        <div className="py-3">
          <p className="text-center">&copy; Copyright {date.getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}
