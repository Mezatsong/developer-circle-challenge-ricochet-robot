export default class NeuralNetwork {
  private layers: number[]; 		//liste des layers
  private neurons: number[][]; 	//matrice des neurones
  private weights: number[][][];//matrice des poids
  private biais: number; 		//biais du reseau
  private fitness: number; 		//fitness du reseau

  //Initialise notre reseau de neurones
  public constructor(layers: number[], biais: number = 0) {
    this.layers = [...layers];
    this.biais = biais;
    this.fitness = 0;
    this.initNeurons();
    this.initWeights();
  }

  //Initialise notre reseau de neurones en copiant celui qu'on donne en parametre
  public static copy(copyNetwork: NeuralNetwork) {
    const neuralNetwork = new NeuralNetwork(copyNetwork.layers, copyNetwork.biais); 
    neuralNetwork.copyWeights(copyNetwork.weights);
    neuralNetwork.setFitness(copyNetwork.getFitness());
    return neuralNetwork;
  } 

  //Cree notre matrice de neurones
  initNeurons() {
    this.neurons = new Array<number[]>(this.layers.length);
    for(let i=0; i<this.layers.length; i++) {
      this.neurons[i] = new Array<number>(this.layers[i]);
    }
  }

  //Cree notre matrices de poids
  initWeights() {
    this.weights = [];

    //Iteration sur tout les neurones ayant des connexions entrantes
    for (let i = 1; i < this.layers.length; i++) {
      let layerWeightsList: number[][] = [];
      let neuronsInPreviousLayer: number = this.layers[i - 1];

      //Iteration sur tout les neurones du layer actuel
      for (let j = 0; j < this.neurons[i].length; j++) {
        let neuronWeights: number[] = new Array<number>(neuronsInPreviousLayer);

        //Iteration sur tout les neurones du layer precedent, et set leurs poids entre -1 et 1
        for (let k = 0; k < neuronsInPreviousLayer; k++) {
          neuronWeights[k] = this.generateRandomNumber(-1,1);
        }
        layerWeightsList.push(neuronWeights); 
      }
      this.weights.push(layerWeightsList);
    }
  }


  //FeedForward
  feedForward(inputs: number[]): number[] {
    //Ajoute nos inputs dans la matrices des neurones d'entree
    for (let i = 0; i < inputs.length; i++) {
      this.neurons[0][i] = inputs[i];
    }

    //Calculs
    //Iteration sur toute les couches, tout les neurones, puis toutes les connexions entrante et fait les calculs du feedforward
    for (let i = 1; i < this.layers.length; i++) {
      for (let j = 0; j < this.neurons[i].length; j++) {
        let value: number = 0;
        for (let k = 0; k < this.neurons[i - 1].length; k++) {
          value += this.weights[i - 1][j][k] * this.neurons[i - 1][k]; //sum off all weights connections of this neuron weight their values in previous layer
        }
        this.neurons[i][j] = this.activation(value);
      }
    }
    return this.neurons[this.neurons.length - 1]; //retourne le resultat
  }


  //Fonction d'activation : tangente hyperbolique
  private activation(value: number): number {
    return Math.tanh(value);
  }

  //Mutation
  mutate(condition: number): void {
    //Iteration sur tout les poids du reseau
    for (let i = 0; i < this.weights.length; i++)
    {
      for (let j = 0; j < this.weights[i].length; j++)
      {
        for (let k = 0; k < this.weights[i][j].length; k++)
        {

          //Un pourcent de chance de faire muter notre poids en une valeure aleatoire entre -1 et 1
          let weight: number = this.weights[i][j][k];
          let randomNumber = Math.random()*100;
          if (randomNumber <= condition) {
            let randomNumber2: number = this.generateRandomNumber(-1,1);
            weight = randomNumber2;
          }
          this.weights[i][j][k] = weight;
        }
      }
    }
  }

  copyWeights(copyWeights: number[][][]) {
    this.weights = [...copyWeights];
  }

  //Ajoute du fitness au reseau
  addFitness(fit: number): void {
    this.fitness += fit;
  }

  //donne une valeur fixe de fitness au reseau
  setFitness(fit: number): void {
    this.fitness = fit;
  }

  //Recupere le fitness du reseau
  getFitness(): number {
    return this.fitness;
  }

  private generateRandomNumber(min: number, max: number) {
    return min + Math.random() * (max + 1 - min);
  }
}