import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

//
import { Router } from 'components/Router'
import Dynamic from 'containers/Dynamic'

const theme = {
  // Global
  // Colours
colorBase: "#6CA51C",
colorWhite: "#E7E7E7",
colorHighlight: "#991A52",
colorDarkGrey: "#57595B",
colorBlack: "#303030"
  
}

const GlobalStyle = createGlobalStyle`
  html { 
    font-size: 62.5%;
  }
  html,
  body,
  #root {
    font-family: 'Source Sans Pro', sans-serif;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: #2C8834;
  }

  body {
    box-sizing: border-box;
    background: transparent;
    user-select: none;
    cursor: default;
    font-size: 1.6rem;
    letter-spacing: 1px;
    line-height: 2.5rem;
    text-rendering: optimizeLegibility;
    div {
      box-sizing: inherit;
    }
    p, h1, h2, h3 { margin: 0; }
    p { 
      font-size: 1.6rem; 
      font-weight: 300;
    }
    a { 
      font-size: 1.6rem;
      color: white;
      text-decoration: none;
      &:hover {
        color: white;
      }
    }
    button:hover {
      padding: 10px 20px;
    }
    button:hover , button:focus {
      outline: none;
    }
  }
`

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <Root>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
      <div className="content">
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Dynamic path="dynamic" />
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
      </ThemeProvider>
    </Root>
  )
}

export default App
