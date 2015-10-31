var Architeqt = function(port) {
	this.host = 'https://' + window.location.hostname + ':' + port;
};
Architeqt.prototype.getBlueprint = function(id) {
	return $.get(this.host + '/blueprint/' + (id ? id : ''))	
};
Architeqt.prototype.getChildrenOfBlueprint = function(id) {
	if(!id) throw new Error('No id');
	return $.get(this.host + '/blueprint/' + id + '/children');
};
Architeqt.prototype.fullSync = function() {
	return $.post(this.host + '/sync/full');
};
Architeqt.prototype.syncBlueprint = function(id) {
	if(!id) throw new Error('No id');
	return $.post(this.host + '/sync/blueprint/' + id);
};
Architeqt.prototype.syncChild = function(id) {
	if(!id) throw new Error('No id');
	return $.post(this.host + '/sync/child/' + id);
};