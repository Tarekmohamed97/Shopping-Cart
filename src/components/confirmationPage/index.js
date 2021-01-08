import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import {fetchUserData} from '../../redux/actions'

function ConfirmationPage({fetchUserData, users}) {

    useEffect(() => {
        fetchUserData()
    }, [])

    setTimeout(() => {
        console.log(users)
    }, 3000 )

    return (
        <div>
            hi
        </div>
    )
}


const mapStateToProps = state => {
    return{
        users: state.users
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchUserData: () => dispatch(fetchUserData())
    }    
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmationPage)
