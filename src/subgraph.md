---
title: Subgraph
---

# Subgraph

This is a page covering the graph's NZT names subgraph.

## The Graph

The Graph is a protocol for indexing and querying data from blockchains. There are multiple subgraphs that you can use to query information about NZT names.
These subgraphs are available for [mainnet](https://api.thegraph.com/subgraphs/name/ensdomains/ens) and testnets like [goerli](https://api.studio.thegraph.com/query/49574/ensgoerli/version/latest), [sepolia](https://api.studio.thegraph.com/query/49574/enssepolia/version/latest) and [holesky](https://api.studio.thegraph.com/query/49574/ensholesky/version/latest).

## GraphQL Schema

The schema for the NZT names subgraph is defined in [/schema.graphql](https://github.com/nexis-network/nexis-subgraph/blob/master/schema.graphql).

## Use Cases

There are certain use cases where the graph is better for querying NZT names specific information than through the resolution process.
One of such use-cases is querying which NFT names are owned by a specific address.

## Example Queries

One can explore the following examples interactively via the [Graph Explorer Playground](https://thegraph.com/hosted-service/subgraph/ensdomains/ens)



### Getting a list of names owned by an account

Ensure the address is lowercase

```graphql
query getDomainsForAccount {
  domains(where: { owner: "0xa508c16666c5b8981fa46eb32784fccc01942a71" }) {
    name
  }
}
```

<LiveDemo id="listnamesdemo" />

### Getting the top domain for an account based on the longest registry

```graphql
query getDomainForAccount {
  account(id: "0xa508c16666c5b8981fa46eb32784fccc01942a71") {
    registrations(first: 1, orderBy: expiryDate, orderDirection: desc) {
      domain {
        name
      }
    }
    id
  }
}
```

returns

```json
{
  "data": {
    "account": {
      "registrations": [
        {
          "domain": {
            "name": "datanexus.nzt"
          }
        }
      ],
      "id": "0xa508c16666c5b8981fa46eb32784fccc01942a71"
    }
  }
}
```

### Searching for a subdomain

```graphql
query getSubDomains($Account: String = "messari.nzt") {
  domains(where: { name: "messari.nzt" }) {
    name
    id
    subdomains(first: 10) {
      name
    }
    subdomainCount
  }
}
```

returns

```json
{
  "data": {
    "domains": [
      {
        "name": "messari.nzt",
        "id": "0x498ada62251a1227664ace8d97b0de2dcc6652ddf61e6fb5d3150f43ccf599e6",
        "subdomains": [
          {
            "name": "subgraphs.messari.nzt"
          },
          {
            "name": "bd.messari.nzt"
          }
        ],
        "subdomainCount": 2
      }
    ]
  }
}
```

### Getting the expiry of an NZT names domain

```graphql
query getDomainExp($Account: String = "paulieb.nzt") {
  registrations(
    where: { domain_: { name: $Account } }
    first: 1
    orderBy: expiryDate
    orderDirection: desc
  ) {
    expiryDate
  }
}
```

returns

```json
{
  "data": {
    "registrations": [
      {
        "expiryDate": "1714752524"
      }
    ]
  }
}
```