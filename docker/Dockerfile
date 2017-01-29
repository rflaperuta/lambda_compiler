FROM lambci/lambda:build

RUN yum update -y && yum install -y zsh git tmux python3 curl wget && rm /etc/profile.d/aws-cli.sh && sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"

WORKDIR /var/task
