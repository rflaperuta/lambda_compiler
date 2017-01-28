FROM lambci/lambda:build

RUN yum update -y
RUN yum install -y zsh git tmux python3 curl wget 
RUN rm /etc/profile.d/aws-cli.sh
RUN sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"

WORKDIR /var/task
