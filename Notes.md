
# Clustering and retrieval

- retrieval: search for related items. e.g. wiki articles
- clustering: Discover groups of similar inputs

#  Nearest neighbor search

Critical elements:

-  Doc representation
-  Distance measure

Techniques to improve efficiency

- KD trees
- Locality sensitive hashing / LSH

## Doc representation 

Bag of words model
- Ignore order of words
- Count # of instances of each word in vocabulary

Issues with word counts  Rare words

## TF-IDF document representation
- Emphasizes important words
    - Appears frequently in document (common locally)
    - Appears rarely in corpus (rare globally)

TF = Word counts

![tfidf](tfidf.jpg "TF IDF")

Trade off: local frequency vs. global rarity

## Distance metrics

- In 1D
    - just Euclidean distance:
- In multiple dimensions:
    - can define many interesting distance functions
    - most straightforwardly, might want to weight different dimensions differently
- Weighting different features
    - Some features are more relevant than others (e.g. title and abstract vs body od text)
    - Some features vary more than others: Specify weights as a function of feature spread
### euclidean

![scaled Euclidean](scaledEuclidean.jpg "Scaled Euclidean")

![example scaled Euclidean](exampleScaledEuclidean.jpg "Example Scaled Euclidean")

### Cosine similarity – normalize

- not a proper distance metric
- efficient to compute on sparse vecs
- Define distance = 1-similarity

Normalizing can make dissimilar objects appear more similar

Other distance metrics
- Mahalanobis
- rank-based
- correlation-based
- Manhattan
- Jaccard
- Hamming

# K Means

- No labels provided
- Unsupervised learning

## What defines a cluster?

- Cluster defined by center & shape/spread

Assign observation xi (doc)to cluster k (topic label) if: 

-  Score under cluster k is higher than under others

## K means 

- Score = distance to cluster center (smaller better)
    - For simplicity, often define score as distance to cluster center (ignoring shape)
    
0. Initialize cluster centers
1. Assign observations to closest cluster center  
2. Revise cluster centers as mean of assigned observations
3. Repeat 1.+2. until convergence (to a local optimum)

Can be implemented as coordinate descent algorithm

## smart initialization with k means ++

Smart initialization:
1.  Choose first cluster center uniformly at random from data points
2.  For each obs x, compute distance d(x) to nearest cluster center. (i.e. more likely to choose a datapoint as a cluster center if  the data point is far away) 
3.  Choose new cluster center from amongst data points, with probability of x being chosen proportional to d(x)^2
4.  Repeat Steps 2 and 3 until k centers have been chosen

- Computationally costly relative to random initialization, but the subsequent k-means often converges more rapidly
- Tends to improve quality of local optimum and lower runtime

# What happens as k increases

- K means attempts to minimize the sum of squared distances
- An heteroreneous cluster has dissimilar objects within a single cluster. i.e. the distance from the points to the cluster center is relatively large to another cluster. this is measured by the sum of squared distances.
- as K increases, overfitting occurss.
- The extreme case is K = Size of data, in which case the heterogenity/RSS is 0!

## Choosing K

Heuristic

![choosing K](choosingK.jpg)





