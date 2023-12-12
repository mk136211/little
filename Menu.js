import React from 'react'
import recipes from '../recipes'
const Menu = () => {
    const handleOrder=()=>{
        console.log(id,"id is clicked")
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
          }
        });
    }
  return (
    <div className='menu-container'>
        <div className='menu-header'>
            <h2>This weeks Specials!</h2>
            <button>Order Menu</button>
        </div>
      <div className='cards'>
        {
            recipes.map(recipe=>
             <div key={recipe.id} className='menu-items'>
                <img src={recipe.image} alt="" />
                <div className='menu-content'>
                    <div className='heading'>
                        <h5>{recipe.title}</h5>
                        <p>{recipe.price}</p>
                    </div>
                    <p>{recipe.description}</p>
                    <button className='orderBtn' onClick={()=>handleOrder(recipe.id)}>order Now</button>
                </div>
             </div>   
                )
        }
      </div>
    </div>
  )
}

export default Menu
