import './CreateProduct.css'
import { useNavigate } from 'react-router-dom'
import useForm from "../../hooks/useForm";
import useRequest from '../../hooks/useRequest'
import { validateCreate } from '../../validators/validateCreate';
import { useState } from 'react';



export default function CreateProduct() {
  const { request } = useRequest()
  const navigate = useNavigate()
  const [IsPending,setIsPending]=useState(false)

  const submit = async (values) => {
    const data = values;
    try {
      setIsPending(true)
      await request('/phones/create', 'POST', data);
      navigate('/my-products')

    } catch (err) {
      alert(err.message)
    }finally{
      setIsPending(false)
    }
  }

  const { values, errors, touched, register, submitHandler } = useForm({

    phoneName: '',
    displaySize: '',
    color: '',
    cpu: '',
    ram: '',
    storage: '',
    price: '',
    image: ''

  }, validateCreate,
    submit

  )

  const inputClass = (field) => {
    const hasError = errors[field] && touched[field];
    return `input ${hasError ? 'input-error' : ''}`;
  };

  const errorText = (field) =>
    errors[field] && touched[field] && (
      <p className="error-text">{errors[field]}</p>
    );

  return (
    <div className="create-phone-container">
      <h1 className="create-title">Add New Phone</h1>

      <form className="phone-form" onSubmit={submitHandler} >
        <div className="form-group">
          <label htmlFor="phoneName">Phone Name</label>
          <input
            type="text"
            id="phoneName"
            {...register('phoneName')}
            className={inputClass('phoneName')}
            placeholder="e.g. iPhone 15 Pro"
            required

          />

          {errorText('phoneName')}
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="displaySize">Display Size</label>
            <input
              type="text"
              id="displaySize"
              {...register('displaySize')}
              className={inputClass('displaySize')}
              placeholder="e.g. 6.7 "
              required

            />
            {errorText('displaySize')}
          </div>

          <div className="form-group">
            <label htmlFor="color">Color</label>
            <input
              type="text"
              id="color"
              {...register('color')}
              className={inputClass('color')}
              placeholder="e.g. Space Black"
              required

            />
            {errorText('color')}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="cpu">Processor (CPU)</label>
            <input
              type="text"
              id="cpu"
              {...register('cpu')}
              className={inputClass('cpu')}
              required
              placeholder="e.g. A17 Pro"

            />
            {errorText('cpu')}
          </div>

          <div className="form-group">
            <label htmlFor="ram">RAM</label>
            <input
              type="text"
              id="ram"
              {...register('ram')}
              className={inputClass('ram')}
              placeholder="e.g. 8GB"
              required

            />
            {errorText('ram')}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="storage">Storage</label>
            <input
              type="text"
              id="storage"
              {...register('storage')}
              className={inputClass('storage')}
              placeholder="e.g. 256GB"
              required

            />
            {errorText('storage')}
          </div>

          <div className="form-group">
            <label htmlFor="price">Price ($)</label>
            <input
              type="number"
              id="price"
              {...register('price')}
              className={inputClass('price')}
              placeholder="e.g. 999"
              required

            />
            {errorText('price')}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="imageUrl">Image URL</label>
          <input
            type="url"
            id="imageUrl"
            {...register('image')}
            className={inputClass('image')}
            placeholder="https://example.com/image.jpg"
            required
          />
          {errorText('image')}

        </div>

        <div className="form-actions">
          <button disabled={IsPending} type="submit" className="submit-btn">
            Add Phone{IsPending&&'...'}
          </button>
          <button type="button" onClick={() => navigate(-1)} className="cancel-btn">
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}