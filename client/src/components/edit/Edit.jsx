import './Edit.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import useRequest from '../../hooks/useRequest'
import { useEffect } from 'react';

export default function Edit() {
    const navigate = useNavigate();
    const { productId: phoneId } = useParams();
    const { request } = useRequest();

    const editProductHandler = async (values) => {
        const data = values;
        try {
            await request(`/phones/${phoneId}`, 'PUT', data);
            navigate(`/${phoneId}/details`)

        } catch (err) {
            alert(err.message)
        }
    }

    const { register, handleSubmit, formState, setValue } = useForm({
        defaultValues: {
            phoneName: '',
            displaySize: '',
            color: '',
            cpu: '',
            ram: '',
            storage: '',
            price: '',
            image: ''
        },
        mode: 'onBlur',
        reValidateMode: 'onChange'
    })




    const inputClass = (field) => formState.errors[field] ? 'input input-error' : 'input';
    const errorText = (field) => formState.errors[field] && <p className="error-text">{formState.errors[field].message}</p>;



    useEffect(() => {
        request(`/phones/${phoneId}`)
            .then(result => {
                const fields = ['phoneName', 'displaySize', 'color', 'cpu', 'ram', 'storage', 'price', 'image'];
                fields.forEach(field => setValue(field, result[field]));
            })
            .catch(err => alert(err.message));
    }, [phoneId, setValue]);

    return (

        <div className="edit-phone-container">
            <h1 className="create-title">Edit Phone</h1>

            <form className="phone-form" onSubmit={handleSubmit(editProductHandler)} >
                <div className="form-group">
                    <label htmlFor="phoneName">Phone Name</label>
                    <input
                        type="text"
                        id="phoneName"
                        {...register('phoneName', {
                            required: 'Phone Name is Required !',
                            minLength: {
                                value: 3,
                                message: 'Phone name must be min 3 characters'
                            }
                        })}
                        required
                        placeholder="e.g. iPhone 15 Pro"
                        className={inputClass('phoneName')}
                    />

                    {errorText('phoneName')}
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="displaySize">Display Size</label>
                        <input
                            type="text"
                            id="displaySize"
                            {...register('displaySize', {
                                required: 'Display Size is Required !'
                            })}
                            required
                            placeholder="e.g. 6.7 "
                            className={inputClass('displaySize')}
                        />
                        {errorText('displaySize')}
                    </div>

                    <div className="form-group">
                        <label htmlFor="color">Color</label>
                        <input
                            type="text"
                            id="color"
                            {...register('color', {
                                required: 'Color is Required !'
                            })}
                            required
                            placeholder="e.g. Space Black"
                            className={inputClass('color')}
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
                            {...register('cpu', {
                                required: 'CPU is Required !'
                            })}
                            required
                            placeholder="e.g. A17 Pro"
                            className={inputClass('cpu')}
                        />
                        {errorText('cpu')}
                    </div>

                    <div className="form-group">
                        <label htmlFor="ram">RAM</label>
                        <input
                            type="text"
                            id="ram"
                            {...register('ram', {
                                required: 'Ram is Required !'
                            })}
                            required
                            placeholder="e.g. 8GB"
                            className={inputClass('ram')}
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
                            {...register('storage', {
                                required: 'Storage is Required !'
                            })}
                            required
                            placeholder="e.g. 256GB"
                            className={inputClass('storage')}
                        />
                        {errorText('storage')}
                    </div>

                    <div className="form-group">
                        <label htmlFor="price">Price ($)</label>
                        <input
                            type="number"
                            id="price"
                            {...register('price', {
                                required: 'Price is Required !',
                                valueAsNumber: true
                            })}
                            required
                            placeholder="e.g. 999"
                            className={inputClass('price')}
                        />
                        {errorText('price')}
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="imageUrl">Image URL</label>
                    <input
                        type="url"
                        id="imageUrl"
                        {...register('image', {
                            required: 'Image is Required !',

                        })}
                        required
                        placeholder="https://example.com/image.jpg"
                        className={inputClass('image')}
                    />
                    {errorText('image')}

                </div>

                <div className="form-actions">
                    <button type="submit" className="submit-btn">
                        Edit Phone
                    </button>
                    <button type="button" onClick={() => navigate(-1)} className="cancel-btn">
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    )
}