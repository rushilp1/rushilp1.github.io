---
date: '1'
title: 'TwittEr'
cover: './TwittEr.png'
tech:
  - Erlang/OTP
  - Mnesia
  - Cowboy
  - VS Code
---

- Designed a console-based <ins>Twitt</ins>er clone in <ins>Er</ins>lang with 10+ features, including user search, tweets & retweets, subscriptions, follower management, and a real-time tweet timeline.
- Lowered the code complexity by 60% (and removed boilerplate code altogether) by incorporating generic behaviors in the back-end system (made with [Cowboy](https://github.com/ninenines/cowboy)).
- Reached near real-time database performance (request-response latency under 2.2 ms, in [Mnesia](https://www.erlang.org/doc/man/mnesia.html)) by switching to a fast, hash-based user authentication and authorization mechanism.