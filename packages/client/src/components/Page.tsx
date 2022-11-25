import styled from "styled-components"

const Page = styled.div({       //styled component
  width: '100vw',              // 100 viewportWidth  } -> ↓
  height: '100vh',            //100 viewportHeight  } -> -> always stretch to screenSize, every device.,
  display: 'flex',
  alignItems: 'center',      //align child items center horizontally
  justifyContent: 'center', //align child items center vertically 
  background: 'rgb(40, 0, 80)',
  boxSizing: 'border-box',
})

export default Page      // export as fully customizable styled component