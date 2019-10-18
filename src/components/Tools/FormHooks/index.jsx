import { useState } from 'react'
import swal from 'sweetalert'

export const useSignUpForm = (callback) => {
  const [inputs, setInputs] = useState({})
  const handleSubmit = (event) => {
    callback(event, inputs)
  }
  const handleChange = (event) => {
    event.persist()
    setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }))
  }
  return {
    handleSubmit,
    handleChange,
    inputs
  }
}
export const useUpdateForm = (callback) => {
  const [inputs, setInputs] = useState({})
  const handleSubmit = (event) => {
    // if (event) {
    //   event.preventDefault();
    // }
    callback(event, inputs)
  }
  const handleChange = (event) => {
    event.persist()
    setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }))
  }
  const handleImageChange = (e) => {
    const imageMaxSize = 1000000 // bytes
    let file = e.target.files[0]
    console.log(file)
    const acceptedFileTypes = 'image/x-png, image/png, image/jpg, image/jpeg, image/gif'
    const acceptedFileTypesArray = acceptedFileTypes.split(',').map((item) => { return item.trim() })
    const verifyFile = (files) => {
      if (files) {
        const currentFile = file
        const currentFileType = currentFile.type
        const currentFileSize = currentFile.size
        if (currentFileSize > imageMaxSize) {
          swal('Large Image', `This file is not allowed.  ${Math.round(currentFileSize / 1000000)} Mb is too large, maximum allowed size is 1mb`, 'error')
          return false
        }
        if (!acceptedFileTypesArray.includes(currentFileType)) {
          swal('Rejected', 'This file is not allowed. Only images are allowed.', 'error')
          return false
        }
        return true
      }
    }
    if (file) {
      const isVerified = verifyFile(file)
      console.log(isVerified)
      if (isVerified) {
        let reader = new FileReader()
        reader.onloadend = () => {
          setInputs(inputs => ({ ...inputs, image: file, imagePreviewUrl: reader.result }))
        }
        reader.readAsDataURL(file)
      }
    }
  }
  return {
    handleSubmit,
    handleChange,
    handleImageChange,
    inputs
  }
}

export const useUpdateAccount = (callback) => {
  const [inputs, setInputs] = useState({})
  const handleSubmit = (event) => {
    callback(event, inputs)
  }
  const handleChange = (event) => {
    event.persist()
    setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }))
  }
  return {
    handleSubmit,
    handleChange,
    inputs
  }
}
// export default useSignUpForm
