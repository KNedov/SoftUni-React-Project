import { useNavigate } from 'react-router'
import useRequest from '../../hooks/userRequest'
import './CreateProduct.css'
import useForm from '../../hooks/useForm'

export default function CreateProduct() {
  const {request} = useRequest()
  const navigate =useNavigate()

  const createProductHandler = async(values)=>{
    const data=values;
    try{
      await request ('/phones/create','POST',data);
      navigate('/')

    }catch(err){
      alert(err.message)
    }
  }
  const{
    register,
    formAction,
  } = useForm(createProductHandler,{
    phoneName:'',
    displaySize:'',
    color:'',
    cpu:'',
    ram:'',
    storage:'',
    price:'',
    image:'',

  })
    
    return(
        <div className="create-phone-container">
  <h1 className="create-title">Add New Phone</h1>
  
  <form className="phone-form" action={formAction} >
    <div className="form-group">
      <label htmlFor="phoneName">Phone Name</label>
      <input 
        type="text" 
        id="phoneName" 
        {...register('phoneName')} 
        placeholder="e.g. iPhone 15 Pro" 
      />
    </div>
    
    <div className="form-row">
      <div className="form-group">
        <label htmlFor="displaySize">Display Size</label>
        <input 
          type="text" 
          id="displaySize" 
          {...register('displaySize')}  
          placeholder="e.g. 6.7 " 
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="color">Color</label>
        <input 
          type="text" 
          id="color" 
          {...register('color')}  
          placeholder="e.g. Space Black" 
        />
      </div>
    </div>
    
    <div className="form-row">
      <div className="form-group">
        <label htmlFor="cpu">Processor (CPU)</label>
        <input 
          type="text" 
          id="cpu" 
          {...register('cpu')} 
          placeholder="e.g. A17 Pro" 
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="ram">RAM</label>
        <input 
          type="text" 
          id="ram" 
          {...register('ram')} 
          placeholder="e.g. 8GB" 
        />
      </div>
    </div>
    
    <div className="form-row">
      <div className="form-group">
        <label htmlFor="storage">Storage</label>
        <input 
          type="text" 
          id="storage" 
          {...register('storage')} 
          placeholder="e.g. 256GB" 
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="price">Price ($)</label>
        <input 
          type="number" 
          id="price" 
          {...register('price')} 
          placeholder="e.g. 999" 
        />
      </div>
    </div>
    
    <div className="form-group">
      <label htmlFor="imageUrl">Image URL</label>
      <input 
        type="url" 
        id="imageUrl" 
        {...register('image')} 
        placeholder="https://example.com/image.jpg" 
      />
      <small>Must be a valid image URL (jpg, png, gif, webp)</small>
    </div>
    
    <div className="form-actions">
      <button type="submit" className="submit-btn">
        Add Phone
      </button>
      <button type="button" className="cancel-btn">
        Cancel
      </button>
    </div>
  </form>
</div>
    )
}