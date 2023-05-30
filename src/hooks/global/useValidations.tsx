import { useMainContext } from '../context/useMainContext'

export const useValidations = () => {
  const { resetFeedback, setFeedbackActive } = useMainContext()

  function allFieldsAreRequired(fields: object) {
    if (Object.values(fields).includes('')) {
      resetFeedback()
      setFeedbackActive('todos los campos son obligatorios')
      return false
    }
    return true
  }

  function emailNotValid(email: string) {
    const EMAIL_REGEX = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/

    if (!EMAIL_REGEX.test(email)) {
      resetFeedback()
      setFeedbackActive('el email no es válido')
      return false
    }
    return true
  }

  function valueIsToShort(value: string) {
    if (value.length < 2) {
      resetFeedback()
      setFeedbackActive('el texto es muy corto')
      return false
    }
    return true
  }

  function passwordIsToShort(password: string) {
    if (password.length < 6) {
      setFeedbackActive('la contraseña es muy corta')
      resetFeedback()
      return false
    }
    return true
  }

  function passwordsNotEquals(password: string, passwordConfirm: string) {
    if (password !== passwordConfirm) {
      setFeedbackActive('las contraseñas no coinciden')
      resetFeedback()
      return false
    }
    return true
  }

  return {
    allFieldsAreRequired,
    emailNotValid,
    valueIsToShort,
    passwordIsToShort,
    passwordsNotEquals
  }
}
