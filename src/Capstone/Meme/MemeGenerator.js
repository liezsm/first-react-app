import React, {Component} from 'react'


class MemeGenerator extends React.Component {

    constructor(props){
        super(props)
        this.state ={
            topText: '',
            bottomText: '',
            randomImg: "https://i.imgflip.com/1bij.jpg",
            allMemeImgs:[]
        }
        this.handleChange = this.handleChange.bind(this)
        this.memeGenerate = this.memeGenerate.bind(this)

    }

    // todo handle events of inputs

    handleChange(e){
        // console.log(e.target)
        const {name, type, value} = e.target
        this.setState( {
            [name] : value
        })



    }

    // todo meme generator button
memeGenerate(e){
        e.preventDefault()
            // console.log('click',this.state.allMemeImgs.length)
            // todo create a random number
            const random = Math.floor( Math.random() * this.state.allMemeImgs.length) + 1;
            // console.log('random', random)
            // console.log( this.state.allMemeImgs[random])
            const randomImage = this.state.allMemeImgs[random].url
            this.setState({
                randomImg: randomImage
            })

  
    }


    componentDidMount(){
        // todo my own solution
        // fetch('https://api.imgflip.com/get_memes')
        // .then( resp =>  resp.json())
        // .then(data => {
        //         // console.log(data.data.memes)
        //     this.setState( prevState =>{
        //         return {
        //             ...prevState,
        //             allMemeImgs: data.data.memes
        //         }
        //     })
        // })

        fetch('https://api.imgflip.com/get_memes')
        .then( resp => resp.json())
        .then( resp => {
            const {memes} = resp.data
            // console.log(memes[0])
            this.setState({ allMemeImgs: memes})
        })


    }
    
    render() {
       


        return (
           <div  >

               <form className="meme-form"
                    onSubmit={this.memeGenerate}
               >

                    {/* //todo  topText input */}
                   <div>
                       <label>
                           <input type="text" name="topText" 
                           onChange={this.handleChange}
                           value={this.state.topText} 
                           placeholder ="Top text"
                           />
                       </label>
                   </div>
                      {/* //todo end of  topText input */}

                    {/* //todo bottomText input */}
                   <div>
                       <label>
                           <input type="text" name="bottomText" 
                           onChange={this.handleChange}
                           value={this.state.bottomText}
                           placeholder ="Bottom text"
                            />
                       </label>
                   </div>
                      {/* //todo end of bottomText input */}

                      <button 
                    //   onClick={this.memeGenerate}
                      >Gen</button>

               </form>
               
               <div className='meme' >

                <img src={this.state.randomImg} alt="meme" />
               <h2 className='top-text'>{this.state.topText}</h2>
               <h2 className='bottom-text'>{this.state.bottomText}</h2>
               </div>
               
           </div>
        )
    }
}

export default MemeGenerator