import './CreateProduct.css'

export default function CreateProduct() {
    
    return(
        <div className="create-phone-container">
  <h1 className="create-title">Add New Phone</h1>
  
  <form className="phone-form">
    <div className="form-group">
      <label htmlFor="phoneName">Phone Name</label>
      <input 
        type="text" 
        id="phoneName" 
        name="phoneName" 
        placeholder="e.g. iPhone 15 Pro" 
      />
    </div>
    
    <div className="form-row">
      <div className="form-group">
        <label htmlFor="displaySize">Display Size</label>
        <input 
          type="text" 
          id="displaySize" 
          name="displaySize" 
          placeholder="e.g. 6.7 inches" 
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="color">Color</label>
        <input 
          type="text" 
          id="color" 
          name="color" 
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
          name="cpu" 
          placeholder="e.g. A17 Pro" 
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="ram">RAM</label>
        <input 
          type="text" 
          id="ram" 
          name="ram" 
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
          name="storage" 
          placeholder="e.g. 256GB" 
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="price">Price ($)</label>
        <input 
          type="number" 
          id="price" 
          name="price" 
          placeholder="e.g. 999" 
        />
      </div>
    </div>
    
    <div className="form-group">
      <label htmlFor="imageUrl">Image URL</label>
      <input 
        type="url" 
        id="imageUrl" 
        name="imageUrl" 
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