export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-4 mt-16">
      <div className="mx-auto text-center">
        <p>&copy; {currentYear} Ambition Kyndiah.</p>
      </div>
    </footer>
  );
}
