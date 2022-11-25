import axios from "axios"

const port = 666

export interface IUserData {
  firstName?: string
  lastName?: string
  age?: number
}

export const User = {
  async get(
    formValues: IUserData | undefined,
    callback: (data: IUserData[]) => void
  ) {
    
    try {
      callback(
        (
          await axios.get(
            `http://localhost:${port}/api/user/get`, {params: {
              firstName: formValues?.firstName,
              lastName: formValues?.lastName,
              age: formValues?.age
            }}
          )
        ).data as IUserData[] // [] needs because returned data from the api is array of objects. not just object.
      )
    } catch (error) {
      alert('failed to fetch. open console to read more about this error')
      console.log(error)
    }
  },
}
