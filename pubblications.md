---
layout: page
title: Publications
permalink: /publications/
---

A list of my papers, with abstracts, bibliography references and links. Authors are listed in alphabetical order, following the standard convention in cryptography.

## 2026

<div class="publication">
<div class="pub-row">

<div class="pub-image">
<img src="{{ '/assets/images/wombat2.png' | relative_url }}" alt="WOMBAT paper" />
<!-- <img src="/assets/images/wombat2.png" alt="Tanuki paper" /> -->
</div>

<div class="pub-info">

<b>WOMBAT: Post-Quantum Blind Signature from Standard Group Action Assumptions and More</b> <br>
Lucjan Hanzlik, Yi-Fu Lai, <u>Eugenio Paracucchi</u>, Edoardo Persichetti <br>
<i>In EUROCRYPT</i>, May 2026
<div class="pub-buttons-wrapper">
  <a href="#" class="pub-btn toggle-abs">ABS</a>
  <a href="#" class="pub-btn toggle-bib">BIB</a>
  <a href="https://iacr.org/cryptodb/data/paper.php?pubkey=36520" class="pub-btn" target="_blank" rel="noopener noreferrer">ePrint</a>
</div>

<div class="abs-content">
<div class="abs-text">
A recent work, to be presented at Asiacrypt 2025, introduced a family of blind signature frameworks, collectively called Tanukis, built on non-commutative cryptographic group actions. These frameworks develop new techniques and achieve concurrent security for blind signatures. Straightforward instantiations yield compact schemes in two paradigms: an isogeny-based instantiation, based on CSI-FiSh group action, with signatures of about 4.5 KB, and a code-based instantiation, based on LESS and the code equivalence group action, with signatures around 64 KB. These are the first efficient blind signature constructions in the isogeny-based and code-based literature that support concurrent executions.

Despite this advance, the Tanuki frameworks rely on a non-standard and interactive assumption, namely the so-called ``one more'' vectorization assumption. Given several structural attacks and vulnerabilities discovered in various group action instantiations, relying on non-standard assumptions can raise concerns.

In this work we present a new framework that achieves concurrent security while achieving better performance, and relying only on the standard group action hardness assumption, the vectorization problem (also known as the group action inversion problem). For the LESS instantiation, we apply dedicated code-based techniques to reduce signature sizes by a factor of 14.5. These improvements come with rigorous reductions to the standard problem, do not weaken the security claims, and are directly applicable to the LESS instantiations of Tanuki. As a result, our isogeny-based and code-based instantiations yield signature sizes of 8.89 and 8.84 KB, respectively, and retain concurrent security under the standard group-action inversion assumption.

</div>
</div>

<div class="bib-content">
<pre class="bib-text">
@inproceedings{eurocrypt-2026-36520,
  title={WOMBAT: Post-Quantum Blind Signature from Standard Group Action Assumptions and More},
  publisher={Springer-Verlag},
  author={Lucjan Hanzlik and Yi-Fu Lai and Eugenio Paracucchi and Edoardo Persichetti},
  year=2026
}
</pre>
<button class="pub-btn copy-bib">Copy Citation</button>
</div>
</div>
</div>

</div>

## 2025

<div class="publication">
<div class="pub-row">

<div class="pub-image">
<img src="{{ '/assets/images/tanuki.png' | relative_url }}" alt="Tanuki paper" />
<!-- <img src="/assets/images/tanuki.png" alt="Tanuki paper" /> -->
</div>

<div class="pub-info">

<b>Tanuki: New Frameworks for (Concurrently Secure) Blind Signatures from Post-Quantum Group Actions</b> <br>
Lucjan Hanzlik, Yi-Fu Lai, Marzio Mula, <u>Eugenio Paracucchi</u>, Daniel Slamanig, Gang Tang <br>
<i>In ASIACRYPT</i>, Dec 2025
<div class="pub-buttons-wrapper">
  <a href="#" class="pub-btn toggle-abs">ABS</a>
  <a href="#" class="pub-btn toggle-bib">BIB</a>
  <a href="https://eprint.iacr.org/2025/1100" class="pub-btn" target="_blank" rel="noopener noreferrer">PDF</a>
</div>

<div class="abs-content">
<div class="abs-text">
Blind signatures are fundamental cryptographic primitives enabling privacy-preserving authentication and have seen renewed interest in the post-quantum literature. 
Existing efficient constructions predominantly rely on Fischlin’s generic paradigm instantiated over lattice assumptions, while blinding techniques for 
sigma-protocol-based blind signatures remain sparse beyond lattices. Moreover, achieving provable concurrent security under polynomially many sessions has been a longstanding open challenge for this approach in the post-quantum literature as evidenced by the recent attacks in EC’24 and PKC’24. 


This work broadens the landscape of post-quantum blind signatures by introducing novel techniques and proposing four frameworks based on general cryptographic group actions, without requiring commutativity. Our constructions admit instantiations under diverse post-quantum assumptions, including CSIDH (isogeny-based), LESS (code-based, NIST round-two), and more. These frameworks offer flexible trade-offs in assumptions (from interactive one-more to the standard inversion problem) and key/signature sizes, and culminate in a construction that achieves security under polynomially many concurrent sessions. This enables the first efficient blind signatures from isogenies and codes with provable concurrent security with 4.5 and 64.7 KB respectively. We also outline several directions for optimization and further instantiations for future work.

</div>
</div>

<div class="bib-content">
<pre class="bib-text">
@inproceedings{asiacrypt-2025-36020,
  title={Tanuki: New Frameworks for (Concurrently Secure) Blind Signatures from Post-Quantum Groups Actions},
  publisher={Springer-Verlag},
  doi={10.1007/978-981-95-5113-2_2},
  author={Lucjan Hanzlik and Yi-Fu Lai and Marzio Mula and Eugenio Paracucchi and Daniel Slamanig and Gang Tang},
  year=2025
}
</pre>
<button class="pub-btn copy-bib">Copy Citation</button>
</div>
</div>
</div>

</div>

<div class="publication">
<div class="pub-row">

<div class="pub-image">
<img src="{{ '/assets/images/nibs2.png' | relative_url }}" alt="Nibs paper" />
<!-- <img src="/assets/images/nibs2.png" alt="Tanuki paper" /> -->
</div>

<div class="pub-info">
<b>Non-interactive blind signatures from RSA assumption and more</b> <br>
Lucjan Hanzlik, <u>Eugenio Paracucchi</u>, Riccardo Zanotto <br>
<i>In EUROCRYPT</i>, May 2025
<div class="pub-buttons-wrapper">
  <a href="#" class="pub-btn toggle-abs">ABS</a>
  <a href="#" class="pub-btn toggle-bib">BIB</a>
  <a href="https://eprint.iacr.org/2025/2076" class="pub-btn" target="_blank" rel="noopener noreferrer">PDF</a>
</div>

<div class="abs-content">
<div class="abs-text">
Blind signatures have received increased attention from researchers and practitioners. They allow users to obtain a signature under a message without revealing it to the signer. One of the most popular applications of blind signatures is to use them as one-time tokens, where the issuing is not linkable to the redeeming phase, and the signature under a random identifier forms a valid token. This concept is the backbone of the Privacy Pass system, which uses it to identify honest but anonymous users and protect content delivery networks from botnets.

Non-interactive blind signatures for random messages were introduced by Hanzlik (Eurocrypt'23). They allow a signer to create a pre-signature with respect to a particular public key, while the corresponding secret key can later be used to finalize the signature. This non-interaction allows for more applications than in the case of blind signatures. In particular, the author suggested using regular PKI keys as the recipient public key, allowing for a distribution of one-time tokens to users outside the system, e.g., to public keys of GitHub users, similar to airdropping of cryptocurrencies. Unfortunately, despite introducing this concept, the paper fails to provide schemes that work with keys used in the wild.

We solve this open problem. We introduce a generic construction of non-interactive blind signatures that relies on Yao's garbled circuit techniques and provide particular improvements to this generic setting. We replace oblivious transfer with their non-interactive variant and show how to construct them so that the recipient's public key, encoding the OT choice, is a standard RSA public key (e,N). To improve the efficiency of the garbling, we show how to garble the signing algorithm of the pairing-based Pointcheval-Sanders (PS) signatures and the RSA-based signature scheme with efficient protocols by Camenisch and Lysyanskaya.  Our technique also apply to the well-known BBS signatures.  All our improvements are of independent interest and are central to our contribution.
</div>
</div>

<div class="bib-content">
<pre class="bib-text">
@inproceedings{eurocrypt-2025-35055,
  title={Non-Interactive Blind Signatures from RSA Assumption and More},
  publisher={Springer-Verlag},
  doi={10.1007/978-3-031-91124-8_13},
  author={Lucjan Hanzlik and Eugenio Paracucchi and Riccardo Zanotto},
  year=2025
}
</pre>
<button class="pub-btn copy-bib">Copy Citation</button>
</div>
</div>
</div>

</div>


## 2024

<div class="publication">
<div class="pub-row">

<div class="pub-image">
<img src="{{ '/assets/images/mems.png' | relative_url }}" alt="M&M'S paper" />
<!-- <img src="/assets/images/mems.png" alt="Tanuki paper" /> -->
</div>

<div class="pub-info">
<b>M&M’S: Mix and Match Attacks on Schnorr-type Blind Signatures with Repetition</b>  <br>
Khue Do, Lucjan Hanzlik, <u>Eugenio Paracucchi</u> <br>
<i>In EUROCRYPT</i>, May 2024 
<div class="pub-buttons-wrapper">
  <a href="#" class="pub-btn toggle-abs">ABS</a>
  <a href="#" class="pub-btn toggle-bib">BIB</a>
  <a href="https://eprint.iacr.org/2023/1588" class="pub-btn" target="_blank" rel="noopener noreferrer">PDF</a>
</div>

<div class="abs-content">
<div class="abs-text">
Blind signatures allow the issuing of signatures on messages chosen by the user so that they ensure blindness of the message against the signer. Moreover, a malicious user cannot output l+1 signatures while only finishing l signing session. This notion, called one-more unforgeability, comes in two flavors supporting either sequential or concurrent sessions. In this paper, we investigate the security of a class of blind signatures constructed from Sigma-protocols with small challenge space C (i.e.,  polynomial in the security parameter), using k repetitions of the protocol to decrease the chances of a cheating prover. This class of schemes includes, among others, the Schnorr blind signature scheme with bit challenges and the recently proposed isogeny-based scheme CSI-Otter (Crypto’23).
For this class of blind signatures, we show a polynomial-time attack that breaks one-more unforgeability for any l ≥ k concurrent sessions in time O(k·|C|). Contrary to the ROS attack, ours is generic and does not require any particular algebraic structure. We also propose a computational trade-off, where for any t ≤ k, our attack works for l = k/t in time O(k/t·|C|·t). The consequences of our attack are as follows. Schemes in the investigated class of blind signatures should not be used concurrently without applying specific transformations to boost the security to support more signing sessions. Moreover, for the parameters proposed for CSI-Otter (k = 128 and |C| = 2), the scheme becomes forgeable after 128 concurrent signing sessions for the basic attack and with only eight sessions in our optimized attack. We also show that for those parameters, it is even possible to compute two signatures in around 10 minutes with just one signing session using the computation power of the Bitcoin network. Thus, we show that for sequential security, the parameter k must be at least doubled in the security parameter for any of the investigated schemes.
</div>
</div>

<div class="bib-content">
<pre class="bib-text">
@inproceedings{eurocrypt-2024-33886,
  title={M&M'S: Mix and Match Attacks on Schnorr-type Blind Signatures with Repetition},
  publisher={Springer-Verlag},
  doi={10.1007/978-3-031-58751-1_13},
  author={Khue Do and Lucjan Hanzlik and Eugenio Paracucchi},
  year=2024
}
</pre>
<button class="pub-btn copy-bib">Copy Citation</button>
</div>
</div>
</div>

</div>

## Master Thesis

<div class="publication">
<div class="pub-row">

<div class="pub-image">
<img src="{{ '/assets/images/wp.png' | relative_url }}" alt="Master Thesis" />
<!-- <img src="/assets/images/wp.png" alt="Tanuki paper" /> -->
</div>

<div class="pub-info">

<b>On the Construction of Elliptic Curves with a Prescribed Number of Points</b> <br>
Supervisor: Davide Lombardo <br>
Appearing soon in <i>LE CENTO TESI: 2017-2024</i>
<div class="pub-buttons-wrapper">
  <!-- <a href="#" class="pub-btn toggle-bib">BIB</a> -->
  <a href="#" class="pub-btn toggle-abs">ABS</a>
  <a href="/assets/pdf/CM_method.pdf" class="pub-btn" target="_blank" rel="noopener noreferrer">PDF</a>
</div>

<div class="abs-content">
<div class="abs-text">

This thesis describes a procedure (the `CM method'), based on the theory
of complex multiplication, to construct elliptic curves over finite
fields having a prescribed number of rational points. A major ingredient
in the method is the computation of certain Hilbert class polynomials,
whose coefficients grow very quickly with the input data. Faster
algorithms can be obtained by replacing the Hilbert polynomial with
other class polynomials, first introduced by Weber. Such polynomials
come from class invariants, that is, modular functions related to the
Hilbert class field.
In this work, we take an elementary point of view and we focus on the
gamma function, a specific determination of the cube root of the
classical j-invariant. In particular, we show that gamma is a class
invariant for all quadratic discriminants relatively prime to 3, and
explain how to compute the corresponding class polynomial.
The CM method has important applications in cryptography since it can
be exploited to generate elliptic curves suitable for key exchange
protocols, primality proving, and pairing-based cryptosystems. For this
reason, we provide a working implementation using the
SageMath language.
</div>
</div>

</div>
</div>

</div>


