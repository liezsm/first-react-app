Lifecycle Methods discussed

1. render() => isl like changeing your clothes

2. componentDidMount() => is like you were just born in this world

- re-rendering of component doesnt make this rerun ,
  it only run once
  \*most common use-case => calling Api calls to get data from external source

  3. componentWillReceiveProps() => is like when someone gives you a gift. this methods runs everytime it receives a new props from its parents, it has a parameter of nextProps
     syntax: componentWillReceiveProps(nextProps){
     this.props refers to the current while nextProps is the new
     if(nextProps.whateverporperty !== this.props.whateverpropert){
     do something
     }
     }

<!-- reminder: IT IS ALREADY DEPRECATED IN THE LASTEST REACT16 ABOVE -->

4. shouldComponentUpdate(nextProps, nextState) => this method is like your decision if you shoudl change clothes or not
   => returns true or false if you want to update a component

5. componentWillUnmount() => is best for cleaning up or tearing something before the component will dissappear in the screen
   => clearing the clutter of your code to improve perf
   Example: removing EventListener if you happen to put an eventlistener in the componentDidMount()

   <!-- --------------------------------- -->

   LIFECYCLE METHODS 2

   1. static getDerivedStateFromProps(props, state){
      => return a new updated state based upon the props
      =>
      }

   2. getSnapshotBeforeUpdate(){
      => create a backup of the way things are before they are updated
      }
