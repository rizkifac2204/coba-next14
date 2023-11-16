import React from "react";
import Link from "next/link";

function Data() {
  return (
    <div>
      Data Page <Link href={`/admin/data/${100}`}>100</Link>
    </div>
  );
}

export default Data;
