echo "updating existing packages"
sudo yum update -y

echo "install a couple tools that may be helpful for later"
sudo yum install wget -y
sudo yum install unzip -y
sudo yum install lsof -y

echo "installing java 11"
sudo yum install -y java-11-openjdk-devel
sudo update-alternatives --config java
sudo update-alternatives --config javac
echo "java 11 installed and configured"

echo "installing node"
curl --silent --location https://rpm.nodesource.com/setup_12.x | sudo bash -
sudo yum -y install nodejs
echo "node installed"

echo "installing maven"
sudo wget http://repos.fedorapeople.org/repos/dchen/apache-maven/epel-apache-maven.repo -O /etc/yum.repos.d/epel-apache-maven.repo
sudo sed -i s/\$releasever/6/g /etc/yum.repos.d/epel-apache-maven.repo
sudo yum install --nobest -y apache-maven
echo "maven installed"
