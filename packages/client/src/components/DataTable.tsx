import { useEffect, useState } from "react"
import styled from "styled-components"
import { IUserData } from "../api/user"
import { useFormik } from "formik"

const Root = styled.div({
  width: "90%",
  height: "90%",
  maxWidth: "500px",
  borderRadius: "15px",
  background: "rgba(255, 255, 255, 0.5)", //red green blue alpha,
  display: "flex",
  flexDirection: "column", // wrap child items below another
})

const Title = styled.div({
  fontSize: "2rem",
  color: "black",
  textAlign: "center",
  padding: "15px",
})

const Table = styled.table({})

const TableRow = styled.tr({})

const TableHeader = styled.th({})

const TableData = styled.td({
  textAlign: "center",
})

const TableBoxItem = styled.div({
  width: "100%",
})

const Filters = styled.div({
  display: "flex",
  flexDirection: "row",
  gap: "5px",
  padding: "15px",
})

const FilterInput = styled.input({
  flex: "1",
  height: "25px",
  lineHeight: "25px",
  width: "100%",
  border: "1px solid white",
  background: "none",
  outline: "none",
  borderRadius: "5px",
})

const RefreshButton = styled.button({
  flex: "1 50px 20px",
  width: "100%",
  maxWidth: "60px",
  textAlign: "center",
  padding: 0,
})

interface Props {
  //these props are these -> <DataTable title="some" ...../>
  title?: string
  data: IUserData[]
  onRefresh: (values: IUserData) => void
}

const DataTable = (props: Props) => {
  const formik = useFormik({
    initialValues: {} as IUserData,
    onSubmit: (values) => {
      props.onRefresh(values)
    },
  })
  return (
    <Root>
      {/* GOOD */}
      <Title>{props.title ? <></> : <>oops. no title defined</>}</Title>

      {/* BAD
      {(()=>{
        if(props.title) //if not undefined
          return <>{props.title}</>
        else
          return <>oops. no title defined</>
      })()} 
      
      */}

      <form onSubmit={formik.handleSubmit}>
        <Filters>
          <FilterInput id="firstName" name="firstName" onChange={formik.handleChange} value={formik.values.firstName}/>
          <FilterInput id="lastName" name="lastName" onChange={formik.handleChange} value={formik.values.lastName}/>
          <FilterInput type="number" id="age" name="age" onChange={formik.handleChange} value={formik.values.age}/>
          <RefreshButton type="submit">refresh</RefreshButton>
        </Filters>
      </form>
      <Table>
        <TableRow>
          <TableHeader>First Name</TableHeader>
          <TableHeader>Last Name</TableHeader>
          <TableHeader>Age</TableHeader>
        </TableRow>

        {props.data.map((user) => (
          <TableRow>
            <TableData>{user.firstName}</TableData>
            <TableData>{user.lastName}</TableData>
            <TableData>{user.age}</TableData>
          </TableRow>
        ))}
      </Table>
    </Root>
  )
}

export default DataTable
