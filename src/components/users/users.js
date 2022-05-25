import React, { useEffect, useState } from 'react'
import './users.css'
import { useDispatch, useSelector } from 'react-redux'
import { Input } from '@material-ui/core';
import { actions } from '../../redux/actions/actions'
import User from "../userCard/userCard"
import Header from "../header/header"


export default function Users() {
    const dispatch = useDispatch()
    const usersList = useSelector((state) => state.users.users)
    const [filterUsersList, setFilterUsersList] = useState()
    const [searchByName, setSearchByName] = useState();
    const [searchByEmail, setSearchByEmail] = useState();

    useEffect(() => {
        if (usersList.length == 0) {
            dispatch(actions.getUsers());
        }
        return () => {
        }
    }, [])

    const search = () => {
        let filterUsers = usersList.filter((user) => {
            if (searchByEmail) {
                if (user.email.toLowerCase().indexOf(searchByEmail.toLowerCase()) === -1)
                    return false;
            }
            if (searchByName) {
                if (user.name.toLowerCase().indexOf(searchByName.toLowerCase()) === -1)
                    return false;
            }
            return true

        })
        setFilterUsersList(filterUsers)

    }

    useEffect(() => {
        setFilterUsersList(usersList)
    }, [usersList])

    useEffect(() => {
        searchByEmail && search()
    }, [searchByEmail])
    useEffect(() => {
        searchByName && search()
    }, [searchByName])


    return (
        <>
            <Header setSearchByEmail={setSearchByEmail} setSearchByName={setSearchByName} ></Header>
            <div className="container">
                {filterUsersList && filterUsersList.map((user, i) => (
                    <User key={user.id} user={user} />

                ))}</div>
        </>
       
    )
}
