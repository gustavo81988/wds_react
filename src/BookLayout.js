import React, { Component } from 'react'
import { Fragment } from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'

export default class BookLayout extends Component {
    render() {
        return (
            <Fragment>
                <Link to='/books/1'>Book 1</Link>
                <br />
                <Link to='/books/2'>Book 2</Link>
                <br />
                <Link to='/books/new'>New Book</Link>
                <Outlet context={{hello: 'world'}}/>
            </Fragment>
        )
    }
}
