import { useEffect, useState } from "react"
import { IUserData } from "./api/user"
import DataTable from "./components/DataTable"
import Page from "./components/Page"
import useUsers from "./hooks/useUsers"

function App() {
  const { users, refetch } = useUsers()

  return (
    <Page>
      <DataTable data={users} onRefresh={refetch}/>
    </Page>
  );
}

export default App;
