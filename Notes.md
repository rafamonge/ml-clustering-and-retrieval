
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
