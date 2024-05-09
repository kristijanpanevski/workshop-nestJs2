"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtistsService = void 0;
const common_1 = require("@nestjs/common");
let ArtistsService = class ArtistsService {
    create(createArtistDto) {
        return 'This action adds a new artist';
    }
    findAll() {
        return `This action returns all artists`;
    }
    findOne(id) {
        return `This action returns a #${id} artist`;
    }
    update(id, updateArtistDto) {
        return `This action updates a #${id} artist`;
    }
    remove(id) {
        return `This action removes a #${id} artist`;
    }
};
exports.ArtistsService = ArtistsService;
exports.ArtistsService = ArtistsService = __decorate([
    (0, common_1.Injectable)()
], ArtistsService);
//# sourceMappingURL=artists.service.js.map