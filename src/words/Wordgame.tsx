import * as React from 'react';

import list from './list';
import './Wordgame.css';

enum TYPES {
  masculin = "masculin",
  feminin = "feminin",
  neutral = "neutral"
}

enum ARTICLES {
  masculin = "Der",
  feminin = "Die",
  neutral = "Das"
}


const getRandomWord = () => {
  const random = Math.random() * 3;
  let type:TYPES = TYPES.masculin
  if(random > 1) {
    type = TYPES.feminin
  }
  if(random > 2) {
    type = TYPES.neutral
  }
  const words = list[type];
  const index = Math.round(Math.random() * (words.length-1))
  const word = words[index]

  const article = ARTICLES[type];

  return {
    article,
    type,
    word,
  }
}

interface IProps {
  countBy?: number;
}

interface IState {
  article:string;
  type: string;
  word: string;
  show: boolean;
}

class Wordgame extends React.Component<IProps, IState> {
  public static defaultProps: Partial<IProps> = {
    countBy: 1,
  };

  public state: IState = {
    ...getRandomWord(),
    show: false
  }

  public next = () => {  
    if(this.state.show) {
      this.setState({
        ...getRandomWord(),
        show: false,
      });
      return
    } 
   
    this.setState({show: true})
  };

  public render() {
    return (
      <div onClick={this.next}>
        <div className="words">
          <div className="article">
            <h1>{this.state.show ? this.state.article : '...'}</h1>
          </div>
          <div className="word">
            <h1>{this.state.word}</h1>
          </div>
        </div>
        
        <button>Next</button>
      </div>
    );
  }
}

export default Wordgame;