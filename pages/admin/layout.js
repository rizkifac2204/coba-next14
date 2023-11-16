import Link from "next/link";

export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav></nav>

      <ul>
        <li>
          <Link href={`/admin`}>Home</Link>
        </li>
        <li>
          <Link href={`/admin/profile`}>Profile</Link>
        </li>
        <li>
          <Link href={`/admin/data`}>Data</Link>
        </li>
      </ul>
      <br />
      <br />

      {children}
    </section>
  );
}
