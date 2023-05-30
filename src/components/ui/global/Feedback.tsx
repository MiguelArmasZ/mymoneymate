import { useMainContext } from '../../../hooks'
import css from '../../../styles/components/Feedback.module.css'
import Check from '../../../assets/icons/check.png'

interface Props {
  big?: boolean
  redirect?: boolean
}

export const Feedback = ({ big = false, redirect = false }: Props) => {
  const { feedback } = useMainContext()

  const { active, error, msg } = feedback

  return (
    <>
      {active && (
        <p
          className={`${css.Feedback} ${error ? css.Error : ''} ${
            big ? css.Big : ''
          } scale-up-center`}
        >
          {big && (
            <>
              <img className={css.Check} src={Check} alt="" />
            </>
          )}
          {msg}
          {redirect && (
            <span className="tracking-in-expand">redirigiendo...</span>
          )}
        </p>
      )}
    </>
  )
}
