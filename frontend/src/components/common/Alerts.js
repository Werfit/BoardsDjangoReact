import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clearAlerts } from 'actions/alerts'

const Alerts = () => {
    const { msgs, errors } = useSelector(state => state.alerts)
    const [_msgs, setMsgs] = useState('')
    const [_errs, setErrors] = useState(null)

    const dsp = useDispatch()

    useEffect(() => {
        if (msgs) {
            setMsgs(msgs)
            removeAlerts()
        }
    }, [msgs])

    useEffect(() => {
        if (errors) {
            setErrors(errors)
            removeAlerts()
        }
    }, [errors])

    const removeAlerts = () => {
        setTimeout(() => {
            setMsgs('')
            setErrors(null)
            dsp(clearAlerts())
        }, 3000)
    }

    return _msgs && !_errs ? (
        <div className="container alert alert-success my-4">
            { _msgs }
        </div>
    ) : _errs && !_msgs ? (
        <div className="container alert alert-danger my-4">
            {
                _errs.map((_err, index) => <div key={index}>{ _err[1] }</div>)
            }
        </div>
    ) : _errs && _msgs ? (
        <>
            <div className="container alert alert-danger my-4">
                {
                    _errs.map((_err, index) => <div key={index}>{ _err[1] }</div>)
                }
            </div>
            <div className="container alert alert-success">
                { _msgs }
            </div>
        </>
    ) : <></>
}

export default Alerts
