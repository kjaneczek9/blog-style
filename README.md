## Running Locally (If you know what you're doing)

This application requires Node.js v18.17+.

```bash
git clone git@github.com:kjaneczek9/blog-style.git
bun install
bun dev
```

## Running Locally (If you don't know what you're doing - MAC)
In a terminal window:
```bash
# install homebrew:
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# install git
brew install git

# get a ssh key from your mac - press enter for all the prompts
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

# copy that key to put into github (this copys to your keyboard)
pbcopy < ~/.ssh/id_ed25519.pub

# install bun
curl -fsSL https://bun.sh/install | bash

# clone repo
git clone git@github.com:kjaneczek9/blog-style.git

# go into project
cd blog-style

# install dependencies needed
bun install

# run website! - go to localhost:3000 in a browser tab
bun dev
```