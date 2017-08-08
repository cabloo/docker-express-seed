FROM synergycp/express

RUN apt-get update && \
    apt-get install -y sudo

RUN apt-get install -y \
            bind && \
    echo "Cmnd_Alias =/api/src/modules/daemon/daemon.reload.sh" >> /etc/sudoers && \
    echo "www ALL=(root) NOPASSWD: RELOAD_RTG" >> /etc/sudoers

ADD modules /api/src/modules
ADD etc/supervisor.d /etc/supervisor/conf.d


