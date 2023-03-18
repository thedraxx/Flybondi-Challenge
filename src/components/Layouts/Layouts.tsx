import Head from 'next/head'
import React from 'react'
import Navbar from '../UI/Navbar/Navbar';
import Sidebar from '../UI/SideBar/Sidebar';


interface LayoutsProps {
    children: React.ReactNode,
    title?: string,
    description?: string
}


export const Layouts = ({ children, title = "", description = "" }: LayoutsProps) => {
    return (
        <>
            <Head>

                <title>{title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords" content="Keywords" />
                <meta name="author" content="Author" />
                <meta name="robots" content="index, follow" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="ES" />
                <meta name="revisit-after" content="7 days" />
                <meta name="distribution" content="web" />
                <meta name="rating" content="general" />
                <meta name="googlebot" content="index, follow" />
                <meta name="google" content="notranslate" />
                <meta name="google-site-verification" content="google-site-verification" />
                <meta name="description" content={description} />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />

            </Head>

            <Navbar />
            <Sidebar />
            <main
                className='color-primary'
            >
                {children}
            </main>
        </>
    )
}
