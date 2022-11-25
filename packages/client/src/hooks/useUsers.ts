import { useEffect, useState } from "react"
import { IUserData, User } from "../api/user"

const useUsers = () => {
  const [users, setUsers] = useState<IUserData[]>([])
  const [formValues, setFormValues] = useState<IUserData>()

  const fetchUsers = async () => {
    await User.get(formValues, (usersData) => {
      setUsers(usersData)
    })
  }

  useEffect(()=> {
    fetchUsers()
  }, [])

  const refetch = (values: IUserData) => {
    setFormValues(values)
    fetchUsers()
  }

  return {users, refetch}
}

export default useUsers