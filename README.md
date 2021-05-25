[readme.md]
&nbsp;|&nbsp;
# LFS171x - Introduction to Hyperledger Blockchain Technology
<!------------------------------------------------------------------------->
## Table of contents
<h3>1. <a href="#S-1">Discovering Blockchain Technologies</a></h3>
<ol type="i">
    <li><a href="#SS-1-1">Distributed Ledger Technology</a></li>
    <li><a href="#SS-1-2">Bitcoin & Ethereum Blockchains</a></li>
    <li><a href="#SS-1-3">Exploring Permissionless Blockchains</a></li>
    <li><a href="#SS-1-4">Concensus Algorithms</a></i>
    <li><a href="#SS-1-5">Hyperledger</a></i>
    <li><a href="#SS-1-6">Other Open Source Permissioned Distributed Ledgers</a></i>
    <li><a href="#SS-1-7">Challenges in the Adoption/Deployment of Distributed Ledger Technologies</a></i>
</ol>
<h3>2. <a href="#S-2">Introduction to Hyperledger</a></h3>
<ol type="i">
    <li><a href="#SS-2-1">Hyperledger</a></li>
    <li><a href="#SS-2-2">Q & A with Brian Behlendorf, Executive Director, Hyperledger</a></li>
</ol>
<h3>3. <a href="#S-3">Hyperledger: Distributed Ledger Frameworks & Domain Specific Blockchains</a></h3>
<ol type="i">
    <li><a href="#SS-3-1">Hyperledger Frameworks</a></li>
    <li><a href="#SS-3-2">Hyperledger: Domain-Specific Blockchain Technologies</a></li>
</ol>
<h3>4. <a href="#S-4">Hyperledger Tools</a></h3>
<ol type="i">
    <li><a href="#SS-4-1">Hyperledger Tools</a></li>
</ol>
<h3>5. <a href="#S-5">Hyperledger Libraries</a></h3>
<ol type="i">
    <li><a href="#SS-5-1">Hyperledger Libraries</a></li>
</ol>
<h3>6. <a href="#S-6">The Promise of Business Blockchain Technologies</a></h3>
<ol type="i">
    <li><a href="#SS-6-1">Existing Hyperledger Blockchain Use Cases</a></li>
    <li><a href="#SS-6-2">When to Use or Not to Use Blockchain Technologies</a></li>
</ol>
<h3>7. <a href="#S-7">What's Next?</a></h3>
<ol type="i">
    <li><a href="#SS-7-1">What's Next?</a></li>
</ol>

&nbsp;
&nbsp;
## <a id="S-1">1. Discovering Blockchain Technologies</a>
By the end of this chapter, you should be able to:
1. Explain the concepts of blockchain and distributed ledger technologies (DLT).
2. Explore permissioned and permissionless blockchains and their key characteristics.
3. Discuss various components of distributed ledger technologies, including consensus algorithms and smart contracts.
4. Provide a high-level explanation of what Hyperledger is.

### <a id="S-1-1">1a. Distributed Ledger Technology (DLT)</a>
In summary, distributed ledger technology (DLT) generally consists of three basic components:
1. A data model that captures the current state of the ledger.
2. A language of transactions that changes the ledger state.
3. A protocol used to build consensus among participants around which transactions will be accepted, and in what order, by the ledger.

### <a id="S-1-2">1b. Bitcoin and Ethereum Blockchain</a>
According to hyperledger.org,
<blockquote>
"A blockchain is a peer-to-peer distributed ledger forged by consensus, combined with a system for "smart contracts" and other assistive technologies. Together these can be used to build a new generation of transactional applications that establishes trust, accountability, and transparency at their core, while streamlining business processes and legal constraints."
</blockquote>
Smart contracts are simply computer programs that execute predefined actions when certain conditions within the system are met.
Consensus refers to a system of ensuring that parties agree to a certain state of the system as the true state.
Blockchain is a specific form or subset of distributed ledger technologies (DLTs), which constructs a chronological chain of blocks, hence the name "block-chain". Examples of other DLTs are Chain Core, Corda, Quorum, and IOTA. They will be covered later in this chapter.
A block refers to a set of transactions that are bundled together and added to the chain at the same time.
Timestamping is another key feature of blockchain technology. Each block is timestamped, with each new block referring to the previous block. Combined with cryptographic hashes, this timestamped chain of blocks provides an immutable record of all transactions in the network, from the very first (or genesis) block.
In the Bitcoin blockchain, the miner nodes bundle unconfirmed and valid transactions into a block. Each block contains a given number of transactions. In the Bitcoin network, miners must solve a cryptographic challenge to propose the next block. This process is known as "proof of work", and requires significant computing power. We shall discuss proof of work in more detail in the Consensus Algorithms section. For more information about blockchain technology, please read the following article: "A Brief History of Blockchain" by Vinay Gupta.
A Bitcoin block consists of four pieces of metadata:
o	The reference to the previous block
o	The proof of work, also known as a nonce
o	The timestamp
o	The Merkle tree root for the transactions included in this block (Merkle tree is explained next).


### <a id="S-1-3">1c. Exploring Permissionless Blockchains</a>
### <a id="S-1-4">1d. Concensus Algorithms</a>
### <a id="S-1-5">1e. Hyperledger</a>
### <a id="S-1-6">1f. Other Open Source Permissioned Distributed Ledgers</a>
### <a id="S-1-7">1g. Challenges in the Adoption/Deployment of Distributed Ledger Technologies</a>

## <a id="S-2">2. Introduction to Hyperledger</a>
### <a id="SS-2-1">2a. Hyperledger</a>
### <a id="SS-2-2">2b. Q & A with Brian Behlendorf, Executive Director, Hyperledger</a>

## <a id="S-3">3. Hyperledger: Distributed Ledger Frameworks and Domain Specific Blockchains</a>

## <a id="S-4">4. Hyperledger Tools</a>

## <a id="S-5">5. >Hyperledger Libraries</a>

## <a id="S-6">6. The Promise of Business Blockchain Technologies</a>

## <a id="S-7">7. What's Next?</a>


## Another paragraph <a name="paragraph2"></a>
The second paragraph text

<!------------------------------------------>
# **(LFS171x) Hyperledger Blockchain Technology**

LFS171x is part of the Blockchain for Business Professional Certificate. Skills in blockchain are being reported as the top job-skill in demand. This program is designed for the business professional who needs to understand the potential (or threat) of blockchain to their company and industry. Armed with better information of the blockchain landscape, this program will help you rise to new challenges in your current role by giving you a new dimension on which you can add value to your employer.

**Chapter 1. Discovering Blockchain Technologies**

1.  [**Introduction and Learning Objectives**](https://learning.edx.org/course/course-v1:LinuxFoundationX+LFS171x+3T2020/block-v1:LinuxFoundationX+LFS171x+3T2020+type@sequential+block@d694f1dc9ef04695a6d004c96aeb103a)**, 1 min**
2.  [**Distributed Ledger Technology (DLT)**](https://learning.edx.org/course/course-v1:LinuxFoundationX+LFS171x+3T2020/block-v1:LinuxFoundationX+LFS171x+3T2020+type@sequential+block@bf7a3e04813b46e79773b5b55f339861)**, 18 minutes**
3.  [**Bitcoin and Ethereum Blockchains**](https://learning.edx.org/course/course-v1:LinuxFoundationX+LFS171x+3T2020/block-v1:LinuxFoundationX+LFS171x+3T2020+type@sequential+block@ef416cef9de34087a8a5ef3b0abd41f1)**, 7 minutes**
4.  [**Exploring Permissionless Blockchains**](https://learning.edx.org/course/course-v1:LinuxFoundationX+LFS171x+3T2020/block-v1:LinuxFoundationX+LFS171x+3T2020+type@sequential+block@d827129e4f8343a0ad76ff5b6084c8ac)**, 4 minutes**
5.  [**Consensus Algorithms**](https://learning.edx.org/course/course-v1:LinuxFoundationX+LFS171x+3T2020/block-v1:LinuxFoundationX+LFS171x+3T2020+type@sequential+block@42a0909f1f6f4930a6501be2d72a5905)**, 4 minutes**
6.  [**Hyperledger**](https://learning.edx.org/course/course-v1:LinuxFoundationX+LFS171x+3T2020/block-v1:LinuxFoundationX+LFS171x+3T2020+type@sequential+block@a24e7d7d6d8b4a7a803d950bcfe9df33)**, 4 minutes**
7.  [**Other Open Source Permissioned Distributed Ledgers**](https://learning.edx.org/course/course-v1:LinuxFoundationX+LFS171x+3T2020/block-v1:LinuxFoundationX+LFS171x+3T2020+type@sequential+block@99aadc82bdd9412b9070ee31efe1f83e)**, 4 minutes**
8.  [**Challenges in the Adoption/Deployment of Distributed Ledger Technologies**](https://learning.edx.org/course/course-v1:LinuxFoundationX+LFS171x+3T2020/block-v1:LinuxFoundationX+LFS171x+3T2020+type@sequential+block@db02e6d2659642fcaae23847166ddd9c)**, 2 minutes**
9.  [**Knowledge Check**](https://learning.edx.org/course/course-v1:LinuxFoundationX+LFS171x+3T2020/block-v1:LinuxFoundationX+LFS171x+3T2020+type@sequential+block@c6637464303f45969c2647c6d94b36ef)**, 5 activities**

**Chapter 2. Introduction to Hyperledger**

1.  [**Introduction and Learning Objectives**](https://learning.edx.org/course/course-v1:LinuxFoundationX+LFS171x+3T2020/block-v1:LinuxFoundationX+LFS171x+3T2020+type@sequential+block@f55d7228882f4b4597c04451fb4fc9ae)**, 1 minute**
2.  [**Hyperledger**](https://learning.edx.org/course/course-v1:LinuxFoundationX+LFS171x+3T2020/block-v1:LinuxFoundationX+LFS171x+3T2020+type@sequential+block@f4538b2b3e9a4a859097247df7a4e80d)**, 27 minutes**
3.  [**Q/A with Brian Behlendorf, Executive Director of Hyperledger**](https://learning.edx.org/course/course-v1:LinuxFoundationX+LFS171x+3T2020/block-v1:LinuxFoundationX+LFS171x+3T2020+type@sequential+block@83d64062989a483d88d32ff3ceff68fd)**, 9 minutes**
4.  [**Knowledge Check**](https://learning.edx.org/course/course-v1:LinuxFoundationX+LFS171x+3T2020/block-v1:LinuxFoundationX+LFS171x+3T2020+type@sequential+block@dc24e9b74e8f4c7fa5dc876e0c1245ee)**, 4 activities**

**Chapter 3. Hyperledger: Distributed Ledger Frameworks and Domain Specific Blockchains**

1.  [**Introduction and Learning Objectives**](https://learning.edx.org/course/course-v1:LinuxFoundationX+LFS171x+3T2020/block-v1:LinuxFoundationX+LFS171x+3T2020+type@sequential+block@a73f62de2c6b4e5da130e53dd7515f78)**, 1 minute**
2.  [**Hyperledger Frameworks**](https://learning.edx.org/course/course-v1:LinuxFoundationX+LFS171x+3T2020/block-v1:LinuxFoundationX+LFS171x+3T2020+type@sequential+block@6a977492dec44c32a9e80c8a29372104)**, 24 minutes**
3.  [**Hyperledger: Domain-Specific Blockchain Technologies**](https://learning.edx.org/course/course-v1:LinuxFoundationX+LFS171x+3T2020/block-v1:LinuxFoundationX+LFS171x+3T2020+type@sequential+block@b034bd84c1f74e419fff536f0ffcc7f0)**, 2 minutes**
4.  [**Knowledge Check**](https://learning.edx.org/course/course-v1:LinuxFoundationX+LFS171x+3T2020/block-v1:LinuxFoundationX+LFS171x+3T2020+type@sequential+block@48c4facec8024897acebb3ade70b4346)**, 3 activities**

**Chapter 4. Hyperledger Tools**

1.  [**Introduction and Learning Objectives**](https://learning.edx.org/course/course-v1:LinuxFoundationX+LFS171x+3T2020/block-v1:LinuxFoundationX+LFS171x+3T2020+type@sequential+block@a1a2f84f4ad7423e807962310c93d7bb)**, 1 minute**
2.  [**Hyperledger Tools**](https://learning.edx.org/course/course-v1:LinuxFoundationX+LFS171x+3T2020/block-v1:LinuxFoundationX+LFS171x+3T2020+type@sequential+block@332729df129e4dbd8eb7a23102d3530c)**, 5 minutes**
3.  [**Knowledge Check**](https://learning.edx.org/course/course-v1:LinuxFoundationX+LFS171x+3T2020/block-v1:LinuxFoundationX+LFS171x+3T2020+type@sequential+block@b2df0548620544d2872e06ffa1d933f6)**, 2 activities**

**Chapter 5. Hyperledger Libraries**

1.  [**Introduction and Learning Objectives**](https://learning.edx.org/course/course-v1:LinuxFoundationX+LFS171x+3T2020/block-v1:LinuxFoundationX+LFS171x+3T2020+type@sequential+block@33984305f4fb42c1b9d43d60ede53cdb)**, 1 minute**
2.  [**Hyperledger Libraries**](https://learning.edx.org/course/course-v1:LinuxFoundationX+LFS171x+3T2020/block-v1:LinuxFoundationX+LFS171x+3T2020+type@sequential+block@54af0eeeaf5d4923a70df1b8350ed7c5)**, 5 minutes**
3.  [**Knowledge Check**](https://learning.edx.org/course/course-v1:LinuxFoundationX+LFS171x+3T2020/block-v1:LinuxFoundationX+LFS171x+3T2020+type@sequential+block@f9a6c4b4eafb4c2795a74fd846b0814d)**, 2 activities**

**Chapter 6. The Promise of Business Blockchain Technologies**

1.  [**Introduction and Learning Objectives**](https://learning.edx.org/course/course-v1:LinuxFoundationX+LFS171x+3T2020/block-v1:LinuxFoundationX+LFS171x+3T2020+type@sequential+block@d168db8b539140a1a7b9a3060c417bf2)**, 2 minutes**
2.  [**Existing Hyperledger Blockchain Use Cases**](https://learning.edx.org/course/course-v1:LinuxFoundationX+LFS171x+3T2020/block-v1:LinuxFoundationX+LFS171x+3T2020+type@sequential+block@79cebeccac2b43908eabd75e76ca8e24)**, 33 minutes**
3.  [**When to Use or Not to Use Blockchain Technologies**](https://learning.edx.org/course/course-v1:LinuxFoundationX+LFS171x+3T2020/block-v1:LinuxFoundationX+LFS171x+3T2020+type@sequential+block@6d82cf9ccfe742cbba395953d05ae771)**, 7 minutes**
4.  [**Knowledge Check**](https://learning.edx.org/course/course-v1:LinuxFoundationX+LFS171x+3T2020/block-v1:LinuxFoundationX+LFS171x+3T2020+type@sequential+block@67c48a2983f24fc6bfd1cb2f381ec921)**, 3 activities**

**Chapter 7. What's Next?**

[What's Next?](https://learning.edx.org/course/course-v1:LinuxFoundationX+LFS171x+3T2020/block-v1:LinuxFoundationX+LFS171x+3T2020+type@sequential+block@436bf2bb4d5641b28ee685b068e1857b), 3 minutes
