const Welcome = (props) => {
    return (
        <div className='message'>
            {props.isReallyLogged ? 'successfully logged in' : 'Not Loggedin Yet'}
            <div>
                first name is {props.fullnameinfo.firstName},
                last name is {props.fullnameinfo.lastName}
            </div>
        </div>
    )
}

export default Welcome;
