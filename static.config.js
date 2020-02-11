import React from 'react'
import path from 'path'

export default {
  Document: ({ Html, Head, Body, children, siteData, renderMeta }) => (
    <Html>
      <Head>
        <meta charSet="UTF-8" />
        < meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"/>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>Pain Managment In Dogs & Cats</title>
        <link href='https://fonts.googleapis.com/css?family=Montserrat:400,700|Cinzel+Decorative:400,700|Lato:400,700' rel='stylesheet' type='text/css' />
        <style type="text/css" />
      </Head>
      <Body>
        {children}
       </Body>
    </Html>
  ),
  getRoutes: async () => {

    return [
     
    ]
  },
  siteRoot: 'https://vetoquinol-teamontario.ca',
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
}
