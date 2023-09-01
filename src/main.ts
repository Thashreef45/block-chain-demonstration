import cryptoJs from 'crypto-js'

class Block {
    private previousBlockHash: string;
    private createdAt: number;
    private data: string;
    public hash: string;

    constructor(previousHash: string, data: string) {
        this.data = data;
        this.createdAt = Date.now();
        this.hash = this.createHash(previousHash, data)
        this.previousBlockHash = previousHash;
    }

    private createHash(hash: string, data: string): string {
        return cryptoJs.SHA256(hash + data).toString();
    }
}


class BlockChain {
    public chain: Block[];

    constructor() {
        this.chain = [this.setGenesisBlock()]
    }

    private setGenesisBlock(): Block {
        return new Block('#hash', 'Gensis-Block/initial-Block')
    }

    createNewBlock(data: string): void {
        const block = new Block(this.chain[this.chain.length - 1].hash, data)
        this.chain.push(block)
    }

}


const blockChain = new BlockChain()
blockChain.createNewBlock('First Block Data')