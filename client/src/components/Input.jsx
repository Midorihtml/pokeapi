import React from 'react'


const Input = ({ error, setError, data, setData, type, placeholder, name, textError, validation, value }) => {

    const onChange = (e) => {
        setData({ ...data, [name]: e.target.value })
    }
    const onValidate = (e) => {
        if (validation) {
            if (validation.test(data[name])) {
                setError(false)
            } else {
                setError(true)
            }
        }
    }
    return (
        <div style={divStyle}>
            <input
                style={style}
                type={type}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                onKeyUp={onValidate}
                onBlur={onValidate}
            />
            {
                data[name].length === 0 ? null : error && <div style={pError}>{textError}</div>
            }
        </div>
    )
}

export default Input

const divStyle = {
    padding: '10px 0 0 0',
    marginTop: '20px',
}

const style = {
    height: '30px',
    width: '300px',
    textAlign: 'center',
    borderRadius: '5px',
    border: 'transparent',
    boxShadow: '0 0 6px 3px #B2BFC7'
}

const pError = {
    color: '#C70039',
    with: '300px',
    fontSize: '14px'
}